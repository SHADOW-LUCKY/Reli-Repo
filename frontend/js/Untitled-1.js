const change = async (e) => {
    e.preventDefault();
    const res = Object.fromEntries(new FormData(e.target));
    const ans = await get("creyente");
        if(res.filter1 != 0){
            if(res.filter2 !=0){
                if(res.filter3 !=0){
                    if(res.filter4 !=0){
                        ans.forEach((i) => {
                            if(i.idDepartamento == res.filter1 && i.idMunicipio == res.filter2 && i.idComuna == res.filter3 && i.idBarrio == res.filter4){
                                fore(i)
                            }
                        })
                    }else{
                        ans.forEach((i) => {
                            if(i.idDepartamento == res.filter1 && i.idMunicipio == res.filter2 && i.idComuna == res.filter3){
                                fore(i)
                            }
                        })
                    }
                }else{
                    ans.forEach((i) => {
                        if(i.idDepartamento == res.filter1 && i.idMunicipio == res.filter2){
                            fore(i)
                        }
                    })
                }
            }else{
                ans.forEach((i) => {
                    if(i.idDepartamento == res.filter1){
                        fore(i)
                    }
                })
            }
        }
}