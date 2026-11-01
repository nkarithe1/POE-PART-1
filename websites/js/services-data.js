/* ==========================================================
   Thembisa and Son Woodworks - services-data.js
   Single source of truth for the four services.
   Used by:
     - services.js  (renders, searches, filters and sorts the cards)
     - forms.js     (works out the cost / availability estimate
                     on the enquiry form)
   Prices and lead times are the same figures shown in Part 2.
   ========================================================== */
window.SERVICES = [
  {
    id: 'custom-furniture',
    name: 'Custom furniture',
    category: 'furniture',
    categoryLabel: 'Furniture',
    description:
      "Dining tables, benches, bed frames, sideboards and case pieces, designed to your room's " +
      'dimensions and built in a solid wood species of your choice \u2014 typically Oregon pine, ' +
      'blackwood, oak or American ash. Joinery is cut by hand wherever the design allows it, ' +
      'rather than relying on screws or dowels.',
    priceFrom: 8500,
    leadMin: 4,
    leadMax: 8,
    extra: 'Delivered & installed, Gauteng',
    tags: ['table', 'dining', 'bench', 'bed', 'sideboard', 'case piece', 'oak', 'blackwood', 'pine', 'ash', 'bespoke', 'handmade'],
    features: [
      'Wood: Oregon pine, blackwood, oak or American ash',
      'Joinery cut by hand wherever the design allows it',
      "Designed to your room's dimensions",
      'Delivered and installed in Gauteng'
    ]
  },
  {
    id: 'fitted-joinery',
    name: 'Fitted joinery & shopfitting',
    category: 'fitted',
    categoryLabel: 'Fitted & shopfitting',
    description:
      'Built-in wardrobes, kitchen cabinetry, home libraries and retail fit-outs such as counters ' +
      'and shelving. We measure the space ourselves before drawing anything, so fitted pieces are ' +
      'built to fit \u2014 not adjusted on installation day.',
    priceFrom: 14000,
    leadMin: 6,
    leadMax: 10,
    extra: 'Site visit included',
    tags: ['wardrobe', 'kitchen', 'cabinet', 'cabinetry', 'library', 'counter', 'shelving', 'shop', 'retail', 'built-in', 'fit-out'],
    features: [
      'Built-in wardrobes, kitchen cabinetry and home libraries',
      'Retail fit-outs: counters and shelving',
      'We measure the space ourselves before drawing',
      'Site visit included'
    ]
  },
  {
    id: 'restoration',
    name: 'Restoration & re-finishing',
    category: 'restoration',
    categoryLabel: 'Restoration',
    description:
      'Re-gluing loose joints, replacing damaged veneer or timber, and hand-finishing with oil, ' +
      "wax or shellac to match a piece's original character. We assess every restoration in person " +
      'before quoting, since structural condition varies far more than a photo can show.',
    priceFrom: 1800,
    leadMin: 1,
    leadMax: 3,
    extra: 'Free assessment',
    tags: ['repair', 'restore', 'refinish', 'finishing', 'antique', 'veneer', 'shellac', 'oil', 'wax', 'loose joints'],
    features: [
      'Re-gluing loose joints',
      'Replacing damaged veneer or timber',
      'Hand-finishing with oil, wax or shellac',
      'Free in-person assessment before quoting'
    ]
  },
  {
    id: 'small-commissions',
    name: 'Small commissions & gifts',
    category: 'small',
    categoryLabel: 'Small commissions',
    description:
      'Cutting boards, stools, shelving and one-off gift pieces \u2014 a lower-cost way to work ' +
      'with the workshop, or to try a wood species before committing to a larger piece.',
    priceFrom: 650,
    leadMin: 1,
    leadMax: 2,
    extra: 'Local collection or courier',
    tags: ['cutting board', 'stool', 'shelf', 'shelving', 'gift', 'small', 'one-off', 'present'],
    features: [
      'Cutting boards, stools, shelving and one-off gift pieces',
      'A lower-cost way to try a wood species',
      'Local collection or courier'
    ]
  }
];
