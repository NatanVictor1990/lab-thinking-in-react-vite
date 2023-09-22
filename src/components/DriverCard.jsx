import React from "react";

function DriverCard({ name, rating, img, car })

{
    const { model, licensePlate } = car;
  return (
    <div>
      <p>{name}</p>
      <p>{rating} </p>
      <img src={img} alt="img"  width={300} height={300}/>
      <p>
        {model},{licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;