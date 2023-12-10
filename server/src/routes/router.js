const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const userSuggestionsRoute = require('./userSuggestionsRoute.js');

const loginRoute = require('./loginRoute.js');
// const isLoggedIn = require('../middleware/isLoggedIn.js');
const router = express.Router();
const managerDashboardRoute = {
    ceo: (req, res, next) => {
        //ceo
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=2c07e4e1-66f9-478f-bb26-182eae29de19&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager1: (req, res, next) => {
        //bags
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=8e6d9322-2f9b-4ddd-a5a2-1c2e06093c0f&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager2: (req, res, next) => {
        //charlieLola
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=ed58d7bc-edb7-4c12-a141-0c78bbce216b&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager3: (req, res, next) => {
        //christmas
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=98068aa6-47f4-4ff5-9af5-e3440ed1ca95&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager4: (req, res, next) => {
        //doormats
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=358cfefc-21a7-4d21-b649-075c638a644f&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager5: (req, res, next) => {
        //birthday
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=a8e41ca3-b999-471a-91c2-3b8eb0958475&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager6: (req, res, next) => {
        //Home Decor
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=95ffed31-70ac-4bed-94de-7e9702e01af8&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager7: (req, res, next) => {
        //lights
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=b5abf7ad-0c45-445d-a6a1-1c52d53087ed&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager8: (req, res, next) => {
        //miscellaneous
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=f86f9a41-d990-4d3f-8087-58340ef8fa4c&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager9: (req, res, next) => {
        //pet supplies
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=d667c106-8ff0-4693-a332-f0e19c1ba807&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },
    manager10: (req, res, next) => {
        //stationary
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=74bab329-5592-45a3-a32f-709e92ae3db3&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },

    manager11: (req, res, next) => {
        //retrospot
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=0879584b-5ea8-491b-8feb-68b33cf402cf&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },

    manager12: (req, res, next) => {
        //umbrellas
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=8e6d9322-2f9b-4ddd-a5a2-1c2e06093c0f&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');

    },

    manager13: (req, res, next) => {
        //toys
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=825a93e7-cf80-4596-987c-35d1381740f4&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },

    manager14: (req, res, next) => {
        //kitchenware
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=2715e0a6-9bba-49f5-b823-ccd247952fcd&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },

    manager15: (req, res, next) => {
        //waterbottles
        res.redirect('https://app.powerbi.com/reportEmbed?reportId=8e6d9322-2f9b-4ddd-a5a2-1c2e06093c0f&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac');
    },

}

router.post('/login', loginRoute); //this is the route for doing a POST request to the /login endpoint, in order to login,
// router.get('/usersuggestions/:id', userSuggestionsRoute);
router.get('/userSuggestions/:id', async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
    } else {
        res.json(user.purchases);
    }
});


router.get('/dashboard/:id', isLoggedIn, async (req, res, next) => {
    console.log('Route handling function called'); // Add this line

    const dashboardId = req.params.id;
    // Get the user with the specified ID from the database
    const user = await UserModel.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const userRole = user.role; // Get the user's role


    alert('User role:', userRole); // Log the user's role
    console.log('Dashboard ID:', dashboardId); // Log the dashboard ID

    if (userRole === 'CEO') {
        // Allow access to any dashboard
        return managerDashboardRoute[dashboardId];
    } else if (userRole === 'Manager' && dashboardId.startsWith('m')) {
        // Allow access only to manager's own dashboard
        if (req.user.id === dashboardId.slice(1)) { // Check if the manager's ID matches the dashboard ID
            return managerDashboardRoute[dashboardId];
        }
    } else if (userRole === 'Client') {
        // Deny access to all dashboards for 'Client' users
        return res.status(403).json({ message: 'Forbidden' });
    }
    // Deny access for all other cases
    return res.status(403).json({ message: 'Forbidden' });
});
router.get('/dashboards', isLoggedIn, (req, res) => {
    let dashboardLinks = '';
    for (let i = 1; i <= 15; i++) {
        dashboardLinks += `<a href="/dashboard/manager${i}">Manager ${i} Dashboard</a><br/>`;
    }
    res.send(dashboardLinks);
});



module.exports = router;