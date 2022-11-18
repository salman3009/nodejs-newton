function filterDetails(list,key,input){
     return list.filter((obj)=>{
            return obj[key]==input;
     });
}

exports.filterDetails = filterDetails;