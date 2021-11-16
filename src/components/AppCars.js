

const AppCars = () => {
    const data = [
        {id:0, brand:"Yugo", model:"45", year:"1984", maxSpeed:"160", isAutomatic: "No", engine:"903", NumbersOfDoors:3},
        {id:0, brand:"Skala", model:"101", year:"1986", maxSpeed:"180", isAutomatic: "No", engine:"1098", NumbersOfDoors:5}
    ]
    let temp = [];
    
    function ispis(car) {
        for (let i = 0; i < car.length; i++) {
            
            for (let key in car[i]) {
              console.log(key + ' == ' + car[i][key]);
              temp.push(key)
              temp.push(car[i][key])
            }
            console.log(temp)
          }
        
    }

    return(
        <div>
            <h1>
                TEST
                {ispis(data)}
                {temp.map((param) => (<ul><li>{param}</li></ul>))}
            </h1>
        </div>
    );
}
 
export default AppCars;