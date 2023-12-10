// import { name } from 'ejs';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const { id } = useParams(); // Access route parameters

    let dashboardLink;
    let name;
    switch (id) {
        case 'manager1':
            name = 'The bags manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=8e6d9322-2f9b-4ddd-a5a2-1c2e06093c0f&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;
        case 'manager2':
            name = 'The Charlie Lola Merchendise manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=ed58d7bc-edb7-4c12-a141-0c78bbce216b&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;
        case 'manager3':
            name = 'The christmas decorations manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=98068aa6-47f4-4ff5-9af5-e3440ed1ca95&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;
        case 'manager4':
            name = 'The doormats and doorsteps manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=358cfefc-21a7-4d21-b649-075c638a644f&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;
        case 'manager5':
            name = 'The birthday accessories manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=a8e41ca3-b999-471a-91c2-3b8eb0958475&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;
        case 'manager6':
            name = 'The Home Decor manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=95ffed31-70ac-4bed-94de-7e9702e01af8&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;
        case 'manager7':
            name = 'The lights manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=b5abf7ad-0c45-445d-a6a1-1c52d53087ed&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;
        case 'manager8':
            name = 'The miscellaneous manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=f86f9a41-d990-4d3f-8087-58340ef8fa4c&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;
        case 'manager9':
            name = 'The pet supplies manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=d667c106-8ff0-4693-a332-f0e19c1ba807&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;

        case 'manager10':
            name = 'The stationary items manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=74bab329-5592-45a3-a32f-709e92ae3db3&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';

            break;
        case 'manager11':
            name = 'The Retrospot manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=0879584b-5ea8-491b-8feb-68b33cf402cf&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';

            break;
        case 'manager12':
            name = 'The umbrellas manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=8e6d9322-2f9b-4ddd-a5a2-1c2e06093c0f&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';

            break;
        case 'manager13':
            name = 'The toys manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=825a93e7-cf80-4596-987c-35d1381740f4&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';

            break;
        case 'manager14':
            name = 'The kitchenware manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=2715e0a6-9bba-49f5-b823-ccd247952fcd&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';

            break;
        case 'manager15':
            name = 'The waterbottles manager ';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=8e6d9322-2f9b-4ddd-a5a2-1c2e06093c0f&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';

            break;

        case 'ceo':
            name = 'The CEO';
            dashboardLink = 'https://app.powerbi.com/reportEmbed?reportId=2c07e4e1-66f9-478f-bb26-182eae29de19&autoAuth=true&ctid=2d8cc8ba-8dda-4334-9e5c-fac2092e9bac';
            break;

        default:
            dashboardLink = '';
    }

    return (
        <div>
            <h3>Dashboard for {name}</h3>
            <iframe src={dashboardLink} title="Dashboard" style={{ width: '100%', height: '800px' }}></iframe>
        </div>
    );
};

export default Dashboard;
