import { get, post, del, put, getid } from "./API.js";
const data = document.getElementById("data");
const detalles = document.getElementById("detalles");
const form = document.getElementById("form");
const filter = document.getElementById("filter");
const DD = document.getElementById("DD");
const DDF = document.getElementById("DDF");

/* for each optimization */
const fore = async (i) => {
    let plantilla =`
    <td>${i.ididentificacion}</td>
    <td>${i.nombres}</td>
    <td>${i.email}</td>
    <td>${i.NroCelular}</td>
    <td>${i.dirección}</td>
    <td><button class="btn btn-warning more" value="${i.ididentificacion}">Mas</button></td>
    <td><button class="btn btn-danger delete" id="${i.ididentificacion}">Eliminar</button></td>
    `
    data.innerHTML += plantilla
}
/* get data */
const getData = async () => {
    const response = await get("creyente");
    response.forEach((i) => {
        fore(i)
    })
}
/* more about button */
const more = async (e) => {
    if(e.target.classList.contains("more")){
        const id = e.target.value;
        const response = await getid("info", id);
        console.log(response);
        response.forEach((i) => {
            let plantilla =`
            <div class="w-100">
              <div class="d-flex justify-content-center mb-3">
                <img  src="https://static-00.iconduck.com/assets.00/sheep-icon-1830x2048-tk1et4o6.png" alt="..." width="200px">
              </div>
              <div class="d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${i.nombreCreyente}</h5>
                    <p class="card-text">Hijo del señor</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"> ministerio: ${i.ministerio}</li>
                    <li class="list-group-item"> nivelFormacion: ${i.nivelFormacion}</li>
                    <li class="list-group-item"> nivelRuta: ${i.nivelRuta}</li>
                  </ul>
                </div>
              </div>
          </div> 
            `
            detalles.innerHTML = plantilla
        })

       
    }
}
/* Editar del form */
const sendform = async () => {
    const datad = await get("departamento");
    datad.forEach((i) => {
        let plantilla =`
        <option class="DD" value="${i.idDepartamento}">${i.nombreDepartamento}</option>
        `
        DD.innerHTML += plantilla
    })
    DD.addEventListener("click", async (e) => {
        let selectedValue = DD.value;
        if(selectedValue != "0" ){
            const datam = await get("municipio");  
            const DM = document.getElementById("DM");
            DM.innerHTML = `<option value="0">seleccione una opcion</option>`;
            datam.forEach((i) => {
                if(i.idDepartamento == selectedValue){
                    let plantilla =`
                    <option class="DM" value="${i.idMunicipio}">${i.NombreMunicipio}</option>
                    `
                    DM.innerHTML += plantilla
                }
            })
        }else{
            DM.innerHTML = `<option value="0">seleccione una opcion</option>`;
            DC.innerHTML = `<option value="0">seleccione una opcion</option>`;
            DB.innerHTML = `<option value="0">seleccione una opcion</option>`;
        }
    });
    DM.addEventListener("click", async (e) => {
        let selectedValue = DM.value;
        if(selectedValue != "0" ){
            const datam = await get("comuna");  
            const DC = document.getElementById("DC");
            DC.innerHTML = `<option value="0">seleccione una opcion</option>`;
            datam.forEach((i) => {
                if(i.idMunicipio == selectedValue){
                    let plantilla =`
                    <option class="DC" value="${i.idComuna}">${i.nombreComuna}</option>
                    `
                    DC.innerHTML += plantilla
                }
            })
        }else{
            DC.innerHTML = `<option value="0">seleccione una opcion</option>`;
            DB.innerHTML = `<option value="0">seleccione una opcion</option>`;
        }
    })
    DC.addEventListener("click", async (e) => {
        let selectedValue = DC.value;
        if(selectedValue != "0" ){
            const datam = await get("barrio");  
            const DB = document.getElementById("DB");
            DB.innerHTML = `<option value="0">seleccione una opcion</option>`;
            datam.forEach((i) => {
                if(i.idComuna == selectedValue){
                    let plantilla =`
                    <option class="DB" value="${i.idBarrio}">${i.nombreBarrio}</option>
                    `
                    DB.innerHTML += plantilla
                }
            })
        }else{
            DB.innerHTML = `<option value="0">seleccione una opcion</option>`;
        }
    })

}
/* filters */
const sendfil = async () => {
    const datad = await get("departamento");
    datad.forEach((i) => {
        let plantilla =`
        <option class="DDF" value="${i.idDepartamento}">${i.nombreDepartamento}</option>
        `
        DDF.innerHTML += plantilla
    })
    DDF.addEventListener("click", async (e) => {
        let selectedValue = DDF.value;
        if(selectedValue != "0" ){
            const datam = await get("municipio");  
            const DMF = document.getElementById("DMF");
            DMF.innerHTML = `<option value="0">seleccione una opcion</option>`;
            datam.forEach((i) => {
                if(i.idDepartamento == selectedValue){
                    let plantilla =`
                    <option class="DMF" value="${i.idMunicipio}">${i.NombreMunicipio}</option>
                    `
                    DMF.innerHTML += plantilla
                }
            })
        }else{
            DMF.innerHTML = `<option value="0">seleccione una opcion</option>`;
            DCF.innerHTML = `<option value="0">seleccione una opcion</option>`;
            DBF.innerHTML = `<option value="0">seleccione una opcion</option>`;

        }
    });
    DMF.addEventListener("click", async (e) => {
        let selectedValue = DMF.value;
        if(selectedValue != "0" ){
            const datam = await get("comuna");  
            const DCF = document.getElementById("DCF");
            DCF.innerHTML = `<option value="0">seleccione una opcion</option>`;
            datam.forEach((i) => {
                if(i.idMunicipio == selectedValue){
                    let plantilla =`
                    <option class="DCF" value="${i.idComuna}">${i.nombreComuna}</option>
                    `
                    DCF.innerHTML += plantilla
                }
            })
        }else{
            DCF.innerHTML = `<option value="0">seleccione una opcion</option>`;
            DBF.innerHTML = `<option value="0">seleccione una opcion</option>`;
        }
    })
    DCF.addEventListener("click", async (e) => {
        let selectedValue = DCF.value;
        if(selectedValue != "0" ){
            const datam = await get("barrio");  
            const DBF = document.getElementById("DBF");
            DBF.innerHTML = `<option value="0">seleccione una opcion</option>`;
            datam.forEach((i) => {
                if(i.idComuna == selectedValue){
                    let plantilla =`
                    <option class="DBF" value="${i.idBarrio}">${i.nombreBarrio}</option>
                    `
                    DBF.innerHTML += plantilla
                }
            })
        }else{
            DBF.innerHTML = `<option value="0">seleccione una opcion</option>`;
        }
    })

}
/* change things */
const change = async (e) => {
    e.preventDefault();
    const res = Object.fromEntries(new FormData(e.target));
    let {filter1, filter2, filter3, filter4} = res
    const ans = await get("creyente");
        if(filter1 != 0){
            if (filter2 != 0){
                if (filter3 != 0){
                    if (filter4 != 0){
                        data.innerHTML = "";
                        ans.forEach((i) => {
                            if(i.idDepartamento == res.filter1 && i.idMunicipio == res.filter2 && i.idComuna == res.filter3 && i.idBarrio == res.filter4){
                                fore(i)
                            }
                        })
                    }else{
                        data.innerHTML = "";
                        ans.forEach((i) => {
                            if(i.idDepartamento == res.filter1 && i.idMunicipio == res.filter2 && i.idComuna == res.filter3){
                                fore(i)
                            }
                        })  
                    }
                }else{
                    data.innerHTML = "";
                    ans.forEach((i) => {
                        if(i.idDepartamento == res.filter1 && i.idMunicipio == res.filter2){
                            fore(i)
                        }
                    })  
                }
            }else{
                data.innerHTML = "";
                ans.forEach((i) => {
                    if(i.idDepartamento == res.filter1){
                        fore(i)
                    }
                })  
            }
        }else{
            console.log(res.filter1);
        }
    if(data.innerHTML == ""){
        alert("no hay datos(recargue la pagina o busque con otra configuracion)")
    }
}

/* post data*/
const postData = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
   
    let mongo = {ididentificacion:data.ididentificacion,ministerio:data.ministerio ,nivelFormacion:data.nivelFormacion ,nivelRuta:data.nivelRuta,nombreCreyente:data.nombres} 
    let sql = {ididentificacion:data.ididentificacion ,IdBarrio:data.IdBarrio ,dirección:data.dirección ,email:data.email,nombres:data.nombres ,NroCelular:data.NroCelular} 
    await post("creyente", sql);
    await post("info", mongo);
    window.location.reload();
}
const delpost = async (e) => {
    if (e.target.classList.contains("delete")) {
        confirm("desea eliminar?")
        const id = e.target.getAttribute("id");
        await del("creyente", id);
        await del("info", id);
        window.location.reload();
        
    }
}

/*  ,IdBarrio ,dirección ,email,nombres ,telefono
*/


form.addEventListener("submit", postData);
filter.addEventListener("submit", change);
data.addEventListener("click", more);
data.addEventListener("click", delpost);
addEventListener("DOMContentLoaded", getData);
sendform();
sendfil();

