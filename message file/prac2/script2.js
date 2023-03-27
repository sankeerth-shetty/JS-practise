const companies = [
    {name : 'shark inc', category : 'it', start : 1970, end : 2001},
    {name : 'capcom', category : 'it', start : 1980, end : 2021},
    {name : 'tata loans', category : 'finance', start : 1990, end : 2011},
    {name : 'saman bazar', category : 'retail', start : 1975, end : 2001},
    {name : 'sony animation', category : 'animation', start : 1990, end : 2015},
    {name : 'disney', category : 'animation', start : 1992, end : 2023},
    {name : 'vyapari inc', category : 'retail', start : 2001, end : 2021},
    {name : 'paisa bazar', category : 'finance', start : 1998, end : 2023},
    {name : 'dreamworks', category : 'animation', start : 1970, end : 2020},
    {name : 'bit buffs', category : 'it', start : 1970, end : 2021}
];

const ages = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];


//normal function

function compname(){
    let cnames = []
    for(let i=0; i<companies.length; i++)
    {
        if(companies[i].category === 'it')
        {
            cnames.push(companies[i].name)
        }
    }
    console.log(cnames);
}
compname()

