module.exports = {
    host:process.env.HOST || 'localhost',
    port:process.env.PORT || (process.env.NODE_ENV === 'production' ? 8080 : 3001),
    apiHost:process.env.APIHOST || 'localhost',
    apiPort:process.env.APIPORT || '3030',
    dbHost:"localhost",
    dbPort:"27017",
    dbName: "bot-manager",
    app:{
        title:"Todo Manager",
        description:'Todo Manager for add, remove, edit and delete bot.',
        head:{
            titleTemplate:'Todo Manager',
            meta:[
                {
                    name:"description",
                    content:"Todo Manager for add, remove, edit and delete bot."
                },
                {charset:"utf-8"}
            ]
        }
    }
};
