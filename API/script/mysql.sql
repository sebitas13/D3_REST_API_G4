create table equipo(
	id_equipo Integer not null auto_increment primary key,
	nombre VARCHAR(60) not null,
	entrenador VARCHAR(60) not null,
	logo VARCHAR(250)		
);

describe equipo;

insert into equipo (nombre,entrenador,logo) values ('Peru','Juan Maximo Reynoso','logo.png');

insert into equipo (nombre,entrenador,logo) values ('Argentina','Lionel Scaloni','logo2.png');