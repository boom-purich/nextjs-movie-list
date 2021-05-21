const response = {
    resultCode: 20000,
    resultData: {
        id:'1',
        firstname:"Purich",
        lastname:"Sangprasert",
        email:"boomfgth@gmail.com",
        imgUrl:"",
        token:""
    },
    resultDescription: "Success"
}

const userHandler = (req,res) => {
    res.status(200).json(response)
}

export default userHandler;