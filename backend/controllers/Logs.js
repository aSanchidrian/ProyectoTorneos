const Logs = sequelize.define("logs", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_user: DataTypes.INTEGER,
    id_activity: DataTypes.INTEGER,
    id_tournament: DataTypes.INTEGER,
    id_team: DataTypes.INTEGER,
    action: DataTypes.STRING,
    date: DataTypes.DATE,
});

Logs.sync();


const CreateLog = async (req,res,) => {
    try {
        const { id_user, id_activity, id_tournament, id_team, action, date } = req.body;

        const log = await Logs.create({
            id_user,
            id_activity,
            id_tournament,
            id_team,
            action,
            date,
    });

        res.status(201).json(log);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};


const CreateLogNoRequest = async (body) => {
    try {
        const { id_user, id_activity, id_tournament, id_team, action, date } = body;

        const log = await Logs.create({
            id_user,
            id_activity,
            id_tournament,
            id_team,
            action,
            date,
    });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};


const getLogs = async (req, res) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll();

        res.send(data);
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByUser = async (req, res) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                id_user: req.params.id_user
            }
        });

        res.send(data);
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}


const getLogsByActivity = async (req, res) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                id_activity: req.params.id_activity
            }
        });

        res.send(data);
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByTournament = async (req, res) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                id_tournament: req.params.id_tournament
            }
        });

        res.send(data);
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByTeam = async (req, res) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                id_team: req.params.id_team
            }
        });

        res.send(data);
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByAction = async (req, res) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                action: req.params.action
            }
        });

        res.send(data);
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByDate = async (req, res) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                date: req.params.date
            }
        });

        res.send(data);
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByActivityNoRequest = async (id_activity) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                id_activity: id_activity
            }
        });

        return data;
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        //handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByTournamentNoRequest = async (id_tournament) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                id_tournament: id_tournament
            }
        });

        return data;
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        //handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByTeamNoRequest = async (id_team) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                id_team: id_team
            }
        });

        return data;
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        //handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByActionNoRequest = async (action) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                action: action
            }
        });

        return data;
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404)
        //handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}
const getLogsByDateNoRequest = async (date) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                date: date
            }
        });

        return data;
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404) 
        //handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}

const getLogsByUserNoRequest = async (id_user) => {
    try {
        var data = "";
        //encuentra todos los esquipos
        data = await Logs.findAll({
            where: {
                id_user: id_user
            }
        });

        return data;
    } catch (err) {
        console.log(err); //Opcional
        //handleHttpError(res, 'ERROR_GET_ITEMS', 404) 
        //handleHttpError(res, "ERROR_GET_LOGS"); 
    }
}
