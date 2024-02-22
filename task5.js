let resumeData={
    name:"Muthamizharasi T",
    age:23,
    job:"Front end developer",
    email:"muthamizh1023@gmail.com",
    address: {
        houseNo:18,
        street:"Annaithersa street",
        area:"Kottampatti",
        city:"pollachi",
        district:"coimbatore",
        state:"Tamilnadu",
        pincode:642002,
    },
    skills: {
        WebDevelopment:"JAVASCRIPT",
    },
    education:[
        {
        degree:"Bsc botany",
        college:"Nallamuthu gounder mahalingam college",
        yearOfPassing:2021,
        },
        
        {
        degree:"MBA",
        college:"Bharathiyar University",
        yearOfPassing:2023,
        },
    ],
};

// Using for...in loop
for (let key in resumeData) {
    console.log(key, ":", resumeData[key]);
}

// Using for loop
for (let i = 0; i < resumeData.education.length; i++) {
    console.log("education:", resumeData.education[i]);
}

// Using for...of loop (for arrays)
for (let education of resumeData.education) {
  console.log("degree:" ,education.degree);
  console.log("yearOfPassing:", education.yearOfPassing);
}

// Using forEach loop (for arrays)
resumeData.education.forEach((edu) => {
  console.log("Degree:", edu.degree);
  
});