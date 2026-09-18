{
    'name': 'Cifra Conseils Website Theme',
    'description': 'Thème Odoo Website pour Cifra Conseils Inc., direction financière et comptabilité fractionnelles pour PME québécoises.',
    'category': 'Website/Theme',
    'version': '19.0.1.0.0',
    'author': 'Cifra Conseils Inc.',
    'website': 'https://www.cifraconseils.ca',
    'license': 'LGPL-3',
    'depends': ['website', 'crm'],
    'data': [
        'data/website.xml',
        'data/pages.xml',
        'views/website_templates.xml',
    ],
    'assets': {
        'web._assets_primary_variables': [
            'odoo_cifra_conseils/static/src/scss/primary_variables.scss',
        ],
        'web.assets_frontend': [
            'odoo_cifra_conseils/static/src/scss/theme.scss',
            'odoo_cifra_conseils/static/src/js/theme.js',
        ],
    },
    'installable': True,
    'application': True,
}
