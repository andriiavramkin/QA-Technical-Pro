const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
}


//solution

function findValueByKey(companyName) { 
    function search(companyObj, name) { 
        if (companyObj.name === name) { 
            return companyObj; 
        } 
        if (companyObj.partners) { 
            for (const partner of companyObj.partners) { 
                const result = search(partner, name); 
                if (result) { 
                    return result; 
                } 
            } 
        } 
    }  
    
    for (const client of company.clients) { 
        if (client.name === companyName) { 
            return client; 
        } 
        if (client.partners) { 
            const result = search(client, companyName); 
            if (result) { 
                return result; 
            } 
        } 
    }
        return 'Company not found'; 
    }

    console.log(findValueByKey('Клієнт 10'))