const Employee = require('../model/EmpModel');

const EmpCtrl = {
    readAll: async (req, res) => {
        try {
            // res.json('read works')
            let allEmp = await Employee.find({});
            res.status(200).json(allEmp);
        } catch (err) {
            return res.status(500).json({ msg:err.message})
        }
    },
    create: async (req, res) => {
        try {
            let {name, email, date, mobile, jobtype, location} = req.body;

            let newEmp = await Employee({
                name,email,date,mobile,jobtype,location
            });
            // res.json('create works')
            await newEmp.save();
             res.status(200).json({msg : 'Employee created successfully'})
            
        } catch (err) {
            res.status(500).json({ msg:err.message})
            console.log(err.message)
        }
    },
    edit: async (req, res) => {
        try {
            // res.json('edit works')
            let id = await req.params.id;
            let emp = await Employee.findById( { _id:id})

            res.json({emp})
            // res.status(200).json(emp)
            
        } catch (err) {
            res.status(500).json({ msg:err.message})
        }
    },
    update: async (req, res) => {
        try {
            // res.json('update works')
            let {name, email, date, mobile, jobtype, location} = req.body;
            let id = req.params.id;

           await Employee.findByIdAndUpdate({_id:id},{name, email, date, mobile, jobtype, location});
            res.status(200).json({msg:'Employee update successfully'});
            
        } catch (err) {
            res.status(500).json({ msg:err.message})
        }
    },
    delete: async (req, res) => {
        try {
            // res.json('delete works')

            let id = req.params.id;
            await Employee.findByIdAndDelete({_id:id})
            res.status(200).json({ msg: 'Employee deleted successfully'})

        } catch (err) {
            res.status(500).json({ msg:err.message})
        }
    },
    upload:(req,res) => {
        console.log(req.file);
        res.status(200).json({
            success:"success"
        });
    },
};

module.exports = EmpCtrl;