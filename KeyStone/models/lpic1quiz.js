var keystone = require('keystone'),
    Types = keystone.Field.Types;

var LPIC1 = new keystone.List('LPIC1');

LPIC1.add({
    question: { type: String, required: true, initial: true, default: '' },
    qtype: { type: Types.Select, initial: true, options: 'Boolean, Blank, Default', default: 'Default' },
    true: { type: Boolean, initial: true, dependsOn: { qtype: 'Boolean' } },
    answer: { type: String, initial: true, required: true, default: '', dependsOn: {qtype: ['Blank' , 'Default']} },
    opcount: { type: Types.Select, options: '0, 2, 3, 4, 5', default: '0', initial: true, dependsOn: {qtype: 'Default'} },
    op1: { type: String, initial: true, default: '',  dependsOn:{ opcount: ['2','3','4','5']}  },
    op2: { type: String, initial: true, default: '',  dependsOn:{ opcount: ['2','3','4','5']}  },
    op3: { type: String, initial: true, default: '',  dependsOn:{ opcount: ['3','4','5']}  },
    op4: { type: String, initial: true, default: '',  dependsOn:{ opcount: ['4','5']}  },
    op5: { type: String, initial: true, default: '',  dependsOn:{ opcount: ['5']}  },


    createdAt: { type: Types.Datetime, default: Date.now },
});
LPIC1.defaultSort = '-createdAt';
LPIC1.defaultColumns = 'question|20%, qtype|10%, answer|10%, true|5%, createdAt|20%';
LPIC1.register();



/*
first: { type: String },
// Will show if first === "value1", "1" or "2"
second: { type: String, dependsOn: { first: ['value1', '1', 2] } },
// Will show if first == "value1"
third: { type: String, dependsOn: { first: 'value1' } }

---------------------------------------------------

category: { type: Types.Select, options: 'user, editor, admin', default: 'user' },
*/
