const e=document.querySelector(".list");e.innerHTML=((e,r)=>{for(let{id:o,model:n,brand:i,type:c,color:d,price:a,number:t,country:l,description:p}of r)e+=`
    <li id="${o}" class="product-item">
      <h2 class="model">Model: ${n}</h2>
      <div class="content">
        <p class="brand">Brand: ${i}</p>
        <p class="type">Type: ${c}</p>
      </div>
      <div class="content">
        <p class="price">Price: ${a}</p>
        <p class="color">Color: ${d}</p>
      </div>
      <div class="content">
        <p class="number">Number: ${t}</p>
        <p class="country">Country: ${l}</p>
      </div>
      <p class="description">Description: ${p}</p>
    </li>
  `;return e})("",[{id:1,model:"Model S",brand:"Tesla",type:"Sedan",color:"Red",price:8e4,number:"TSL-1234",country:"USA",description:"A high-performance electric sedan with autopilot."},{id:2,model:"Mustang",brand:"Ford",type:"Coupe",color:"Blue",price:55e3,number:"FRD-5678",country:"USA",description:"A powerful muscle car with a legendary design."},{id:3,model:"Civic",brand:"Honda",type:"Sedan",color:"White",price:25e3,number:"HND-9101",country:"Japan",description:"A reliable and fuel-efficient compact sedan."},{id:4,model:"Camry",brand:"Toyota",type:"Sedan",color:"Black",price:3e4,number:"TYT-2345",country:"Japan",description:"A comfortable and stylish sedan for daily use."},{id:5,model:"A4",brand:"Audi",type:"Sedan",color:"Silver",price:4e4,number:"AUD-6789",country:"Germany",description:"A luxurious sedan with advanced technology."},{id:6,model:"X5",brand:"BMW",type:"SUV",color:"Gray",price:6e4,number:"BMW-1357",country:"Germany",description:"A premium SUV with sporty performance."},{id:7,model:"Q7",brand:"Audi",type:"SUV",color:"Blue",price:7e4,number:"AUD-2468",country:"Germany",description:"A spacious and elegant SUV with modern features."},{id:8,model:"F-150",brand:"Ford",type:"Truck",color:"Black",price:45e3,number:"FRD-7890",country:"USA",description:"A rugged and reliable pickup truck."},{id:9,model:"Corolla",brand:"Toyota",type:"Sedan",color:"Red",price:22e3,number:"TYT-1122",country:"Japan",description:"A popular and fuel-efficient sedan."},{id:10,model:"Model 3",brand:"Tesla",type:"Sedan",color:"White",price:5e4,number:"TSL-3344",country:"USA",description:"A budget-friendly electric car with great performance."},{id:11,model:"CX-5",brand:"Mazda",type:"SUV",color:"Gray",price:32e3,number:"MZD-5566",country:"Japan",description:"A compact SUV with a stylish design."},{id:12,model:"E-Class",brand:"Mercedes-Benz",type:"Sedan",color:"Black",price:7e4,number:"MBZ-7788",country:"Germany",description:"A luxurious executive sedan with premium comfort."},{id:13,model:"Defender",brand:"Land Rover",type:"SUV",color:"Green",price:9e4,number:"LR-9900",country:"UK",description:"A tough off-road SUV with modern technology."},{id:14,model:"Cherokee",brand:"Jeep",type:"SUV",color:"White",price:35e3,number:"JEP-1123",country:"USA",description:"A durable SUV built for adventure."},{id:15,model:"RAV4",brand:"Toyota",type:"SUV",color:"Blue",price:28e3,number:"TYT-3345",country:"Japan",description:"A best-selling SUV with excellent fuel economy."},{id:16,model:"Accord",brand:"Honda",type:"Sedan",color:"Silver",price:31e3,number:"HND-5567",country:"Japan",description:"A spacious and comfortable midsize sedan."},{id:17,model:"Tiguan",brand:"Volkswagen",type:"SUV",color:"Black",price:35e3,number:"VW-7789",country:"Germany",description:"A practical and efficient family SUV."},{id:18,model:"Challenger",brand:"Dodge",type:"Coupe",color:"Yellow",price:6e4,number:"DGE-9901",country:"USA",description:"A modern muscle car with a powerful V8 engine."}]);
//# sourceMappingURL=index.3dc71a8a.js.map
