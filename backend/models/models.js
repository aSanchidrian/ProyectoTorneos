const { DataTypes } = require("sequelize");
const conection = require("../connection")

sequelize = conection

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    sport: DataTypes.STRING,
    schedule: DataTypes.STRING,
    role: DataTypes.TINYINT,
    password: DataTypes.STRING,
});

User.sync()

const Activity = sequelize.define('activities', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    sport: DataTypes.STRING,
    date: DataTypes.DATE,
    privacity: DataTypes.BOOLEAN,
    max_plazas: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    result: DataTypes.STRING,
    place: DataTypes.STRING
});

Activity.sync()

const Tournament = sequelize.define('tournaments', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    sport: DataTypes.STRING,
    date_start: DataTypes.DATE,
    date_end: DataTypes.DATE,
    min_teams: DataTypes.INTEGER,
    max_teams: DataTypes.INTEGER,
    max_players_team: DataTypes.INTEGER,
    rounds: DataTypes.INTEGER,
});

Tournament.sync()

const Team = sequelize.define('teams', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    sport: DataTypes.STRING,
    logo: DataTypes.STRING,
    max_players_team: DataTypes.INTEGER,
});

Team.sync()

const Calendar = sequelize.define('calendar', {
    date: DataTypes.DATE
});

Tournament.belongsToMany(Activity, { through: Calendar });
Activity.belongsToMany(Tournament, { through: Calendar });
Calendar.sync()

const ActivityPlayer = sequelize.define('activity_players', {
    permission: DataTypes.TINYINT
});

User.belongsToMany(Activity, { through: ActivityPlayer });
Activity.belongsToMany(User, { through: ActivityPlayer });
ActivityPlayer.sync()

const TeamMember = sequelize.define('team_members', {
    captain: DataTypes.BOOLEAN
});

User.belongsToMany(Team, { through: TeamMember });
Team.belongsToMany(User, { through: TeamMember });
TeamMember.sync()

const TournamentPlayers = sequelize.define('tournament_players', {
    permission: DataTypes.INTEGER // 1: admin // 2: super-admin
});

User.belongsToMany(Tournament, { through: TournamentPlayers });
Tournament.belongsToMany(User, { through: TournamentPlayers });
TournamentPlayers.sync()

module.exports = { User, Team, TeamMember, TournamentPlayers, Activity, Calendar, Tournament }