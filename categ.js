const XLSX = require('xlsx');
const fs = require('fs');
const json2xls = require('json2xls');

const transactions = XLSX.readFile('output_unique_descriptions.xlsx');
let transactions_list = transactions.SheetNames;
let transactionsData = XLSX.utils.sheet_to_json(transactions.Sheets[transactions_list[0]]);

const OpenAIApi = require('openai');
const openai = new OpenAIApi({ apiKey: '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' });
async function classifyProduct(productDescription) {
    const messages = [
        {
            "role": "system",
            // "content": "This is a product classification model. The model classifies products into 15 categories: Lighting (This includes items like '15CM CHRISTMAS GLASS BALL 20 LIGHTS', 'PINK CHERRY LIGHTS', 'WHITE CHERRY LIGHTS', 'RED TOADSTOOL LED NIGHT LIGHT'),  ...some more categories here... Miscellaneous (This includes items like 'POSTAGE', 'KINGS CHOICE SMALL TUBE MATCHES', 'KINGS CHOICE GIANT TUBE MATCHES', 'KINGS CHOICE CIGAR BOX MATCHES' and any other item that does not fit in other categories). The model has been trained on a dataset of 1000 products."
            "content": "This is a product classification model. The model classifies products into 15 categories: Lighting (This includes items like '15CM CHRISTMAS GLASS BALL 20 LIGHTS', 'PINK CHERRY LIGHTS', 'WHITE CHERRY LIGHTS', 'RED TOADSTOOL LED NIGHT LIGHT'), Home Decor (This includes items like 'RECORD FRAME 7\" SINGLE SIZE', 'FANCY FONT HOME SWEET HOME DOORMAT', 'LOVE BUILDING BLOCK WORD', 'HOME BUILDING BLOCK WORD', 'ASSORTED COLOUR BIRD ORNAMENT', 'PEACE WOODEN BLOCK LETTERS'), Kitchenware (This includes items like 'SAVE THE PLANET MUG', 'HEART MEASURING SPOONS LARGE', 'LUNCHBOX WITH CUTLERY FAIRY CAKES', 'FULL ENGLISH BREAKFAST PLATE', 'PIZZA PLATE IN BOX', 'SMALL MARSHMALLOWS PINK BOWL', 'BISCUITS SMALL BOWL LIGHT BLUE'), Pet Supplies (This includes items like 'CAT BOWL', 'DOG BOWL, CHASING BALL DESIGN'), Christmas Decorations (This includes items like 'CHRISTMAS CRAFT WHITE FAIRY', 'CHRISTMAS CRAFT HEART DECORATIONS', 'CHRISTMAS CRAFT HEART STOCKING', 'PARTY CONE CHRISTMAS DECORATION', 'WOODEN BOX ADVENT CALENDAR'), Toys and Games (This includes items like 'FLORAL BLUE MONSTER', 'STRIPES DESIGN MONKEY DOLL', 'BLUE PADDED SOFT MOBILE', 'VINTAGE SNAKES & LADDERS'), Stationery (This includes items like 'DINOSAURS WRITING SET', 'SET OF MEADOW FLOWER STICKERS'), Bags (This includes items like 'CHARLIE AND LOLA CHARLOTTE BAG', 'JUMBO BAG CHARLIE AND LOLA TOYS', 'JUMBO BAG TOYS'), Doorstops and Doormats (This includes items like 'FANCY FONT HOME SWEET HOME DOORMAT', 'DOOR MAT BLACK FLOCK', 'COUNTRY COTTAGE DOORSTOP GREEN', 'GINGHAM HEART DOORSTOP RED', 'UNION JACK GUNS & ROSES DOORMAT'), Charlie and Lola Merchandise (This includes items like 'CHARLIE+LOLA RED HOT WATER BOTTLE', 'CHARLIE LOLA BLUE HOT WATER BOTTLE', 'CHARLIE+LOLA PINK HOT WATER BOTTLE', 'CHARLIE + LOLA RED HOT WATER BOTTLE', 'TOMATO CHARLIE+LOLA COASTER SET', 'CARROT CHARLIE+LOLA COASTER SET', 'CHARLIE + LOLA BISCUITS TINS', 'CHARLIE AND LOLA FIGURES TINS', 'CHARLIE & LOLA WASTEPAPER BIN BLUE', 'CHARLIE & LOLA WASTEPAPER BIN FLORA'), Retrospot Collection (This includes items like 'BAKING SET 9 PIECE RETROSPOT', 'RETRO SPOT TEA SET CERAMIC 11 PC', 'LUNCHBOX WITH CUTLERY RETROSPOT'), Umbrellas (This includes items like 'BLACK/BLUE DOTS RUFFLED UMBRELLA', 'RED/WHITE DOTS RUFFLED UMBRELLA'), Gift Wrapping and Cards (This includes items like 'WRAP ENGLISH ROSE', 'WRAP BLUE RUSSIAN FOLKART', 'SET OF THREE VINTAGE GIFT WRAPS', 'RETRO SPORT PARTY BAG + STICKER SET', 'VINTAGE DESIGN GIFT TAGS', 'GREETING CARD, THE BLACK CAT', 'RAINY LADIES BIRTHDAY CARD', 'BANQUET BIRTHDAY CARD'), Water Bottles (This includes items like 'SCOTTIE DOG HOT WATER BOTTLE', 'CHOCOLATE HOT WATER BOTTLE', 'CHARLIE+LOLA RED HOT WATER BOTTLE', 'CHARLIE LOLA BLUE HOT WATER BOTTLE', 'CHARLIE+LOLA PINK HOT WATER BOTTLE', 'CHARLIE + LOLA RED HOT WATER BOTTLE'), Miscellaneous (This includes items like 'POSTAGE', 'KINGS CHOICE SMALL TUBE MATCHES', 'KINGS CHOICE GIANT TUBE MATCHES', 'KINGS CHOICE CIGAR BOX MATCHES' and any other item that does not fit in other categories). The model has been trained on a dataset of 1000 products."

        },
        {
            "role": "user",
            "content": `Product: ${productDescription}`
        }
    ];

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages,
            max_tokens: 60,
            temperature: 0.3,
            stop: ['\n']
        });

        if (response.choices && response.choices[0] && response.choices[0].message && response.choices[0].message.content) {
            const content = response.choices[0].message.content;
            const category = content.includes(':') ? content.split(':')[1].trim() : content.trim();
            return category;
        } else {
            console.error('Unexpected response format:', response);
            return null;
        }
    } catch (error) {
        console.error(error);
    }
}

async function classifyAllProducts() {
    let classifiedProducts = [];

    for (let i = 5250; i < 5260; i++) {
        let product = transactionsData[i];
        let category = await classifyProduct(product.Description);
        classifiedProducts.push({ id: product.Product_ID, description: product.Description, category: category });
    }

    fs.writeFileSync('classified_products5250.json', JSON.stringify(classifiedProducts, null, 2));

    // Convert JSON to XLSX
    let xls = json2xls(classifiedProducts);
    fs.writeFileSync('classified_products5250.xlsx', xls, 'binary');

    console.log('Classification complete!');
}

classifyAllProducts();