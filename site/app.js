// Replace these values with your own
const workspaceId = 'your_workspace_id';
const reportId = 'your_report_id';
const embedUrl = 'your_embed_url';
const accessToken = 'your_access_token';

// Embed configuration
const config = {
    type: 'report',
    tokenType: models.TokenType.Embed,
    accessToken: accessToken,
    embedUrl: embedUrl,
    id: reportId,
    settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: true
    }
};

// Embed the Power BI report
const embedContainer = document.getElementById('embedContainer');
const report = powerbi.embed(embedContainer, config);

// Handle errors
report.on('error', (event) => {
    console.error(event.detail);
});

// Resize the embedded report on window resize
window.addEventListener('resize', () => {
    report.resize();
});
