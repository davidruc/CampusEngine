//database

export default{
    dataAlerts(){
        localStorage.setItem("myAlerts", JSON.stringify({
            botones: [
                doton1 = {
                    name: "Servicios",
                    table: [{
                        cabezas: [
                            {name: "Nombre"},
                            {name: "Detalles"},
                            {name: "Disponibilidad"}
                        ],
                        cuerpo:[
                            {name: "Hunters"},
                            {name: "Espacio destinado al descanso y recreacion de nuestros campers y coworkers."},
                            {name: "sujeto a horario"}
                        ]
                    }]
                },
                doton2 = {
                    name: "Cafeteria",
                    table: [{
                        cabezas: [
                            {name: "Nombre"},
                            {name: "Detalles"},
                            {name: "Disponibilidad"}
                        ],
                        cuerpo:[
                            {name: "Hunters"},
                            {name: "Espacio destinado al descanso y recreacion de nuestros campers y coworkers."},
                            {name: "sujeto a horario"}
                        ]
                    }]
                }
                

            ]
        }))
    }
}