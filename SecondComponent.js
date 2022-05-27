import React from "react";
import '../App.css';
import ContainerTable from "./ContainerTable";
import Footer from "./Footer";

const PRODUCTS = [
  {
    Name: "Tiger Nixon",Position: "System Architect",Office: "Edinburgh",
    Age: "61",StartDate: "2011/04/25",Salary: "$320,800"
  },
  {
    Name: "Garrett Winters",Position: "Accountant",Office: "Tokyo",
    Age: "63",StartDate: "2011/07/25",Salary: "$170,750"
  },
  {
    Name: "Ashton Cox",Position: "Junior Technical Author",Office: "San Francisco",
    Age: "66",StartDate: "2009/01/12",Salary: "$86,000"
  },
  {
    Name: "Cedric Kelly",Position: "Senior Javascript Developer",Office: "Edinburgh",
    Age: "22",StartDate: "2012/03/29",Salary: "$433,060"
  },
  {
    Name: "Airi Satou",Position: "Accountant",Office: "Tokyo",
    Age: "33",StartDate: "2008/11/28",Salary: "$162,700"
  },
  {
    Name: "Brielle Williamson",Position: "Integration Specialist",Office: "New York",
    Age: "61",StartDate: "2012/12/02",Salary: "$372,000"
  },
  {
    Name: "Herrod Chandler",Position: "Sales Assistant",Office: "San Francisco",
    Age: "59",StartDate: "2012/08/06",Salary: "$137,500"
  },
  {
    Name: "Rhona Davidson",Position: "Integration Specialist",Office: "Tokyo",
    Age: "55",StartDate: "2010/10/14",Salary: "$327,900"
  },
  {
    Name: "Colleen Hurst",Position: "Javascript Developer",Office: "San Francisco",
    Age: "39",StartDate: "2009/09/15",Salary: "$205,500"
  },
  {
    Name: "Sonya Frost",Position: "Software Engineer",Office: "Edinburgh",
    Age: "23",StartDate: "2008/12/13",Salary: "$103,600"
  },
  {
    Name: "Jena Gaines",Position: "Office Manager",Office: "London",
    Age: "30",StartDate: "2008/12/19",Salary: "$90,560"
  },
  {
    Name: "Quinn Flynn",Position: "Support Lead",Office: "Edinburgh",
    Age: "22",StartDate: "2013/03/03",Salary: "$342,000"
  },
  {
    Name: "Charde Marshall",Position: "Regional Director",Office: "San Francisco",
    Age: "36",StartDate: "2008/10/16",Salary: "$470,600"
  },
  {
    Name: "Haley Kennedy",Position: "Senior Marketing Designer",Office: "London",
    Age: "43",StartDate: "2012/12/18",Salary: "$313,500"
  },
  {
    Name: "Tatyana Fitzpatrick",Position: "Regional Director",Office: "London",
    Age: "19",StartDate: "2010/03/17",Salary: "$385,750"
  },
  {
    Name: "Michael Silva",Position: "Marketing Designer",Office: "London",
    Age: "66",StartDate: "2012/11/27",Salary: "$198,500"
  },
  {
    Name: "Paul Byrd",Position: "Chief Financial Officer (CFO)",Office: "New York",
    Age: "64",StartDate: "2010/06/09",Salary: "$725,000"
  },
  {
    Name: "Gloria Little",Position: "Systems Administrator",Office: "New York",
    Age: "59",StartDate: "2009/04/10",Salary: "$237,500"
  },
  {
    Name: "Bradley Greer",Position: "Software Engineer",Office: "London",
    Age: "41",StartDate: "2012/10/13",Salary: "$132,000"
  },
  {
    Name: "Dai Rios",Position: "Personnel Lead",Office: "Edinburgh",
    Age: "35",StartDate: "2012/09/26",Salary: "$217,500"
  },
  {
    Name: "Jenette Caldwell",Position: "Development Lead",Office: "New York",
    Age: "30",StartDate: "2011/09/03",Salary: "$345,000"
  },
  {
    Name: "Yuri Berry",Position: "Chief Marketing Officer (CMO)",Office: "New York",
    Age: "40",StartDate: "2009/06/25",Salary: "$675,000"
  },
  {
    Name: "Caesar Vance",Position: "Pre-Sales Support",Office: "New York",
    Age: "21",StartDate: "2011/12/12",Salary: "$106,450"
  },
  {
    Name: "Doris Wilder",Position: "Sales Assistant",Office: "Sidney",
    Age: "23",StartDate: "2010/09/20",Salary: "$85,600"
  },
  {
    Name: "Angelica Ramos",Position: "Chief Executive Officer (CEO)",Office: "London",
    Age: "47",StartDate: "2009/10/09",Salary: "$1,200,000"
  },
  {
    Name: "Gavin Joyce",Position: "Developer",Office: "Edinburgh",
    Age: "42",StartDate: "2010/12/22",Salary: "$92,575"
  },
  {
    Name: "Jennifer Chang",Position: "Regional Director",Office: "Singapore",
    Age: "28",StartDate: "2010/11/14",Salary: "$357,650"
  },
  {
    Name: "Brenden Wagner",Position: "Software Engineer",Office: "San Francisco",
    Age: "28",StartDate: "2011/06/07",Salary: "$206,850"
  },
  {
    Name: "Fiona Green",Position: "Chief Operating Officer (COO)",Office: "San Francisco",
    Age: "48",StartDate: "2010/03/11",Salary: "$850,000"
  },
  {
    Name: "Shou Itou",Position: "Regional Marketing",Office: "Tokyo",
    Age: "20",StartDate: "2011/08/14",Salary: "$163,000"
  },
  {
    Name: "Michelle House",Position: "Integration Specialist",Office: "Sidney",
    Age: "37",StartDate: "2011/06/02",Salary: "$95,400"
  },
  {
    Name: "Suki Burks",Position: "Developer",Office: "London",
    Age: "53",StartDate: "2009/10/22",Salary: "$114,500"
  },
  {
    Name: "Prescott Bartlett",Position: "Technical Author",Office: "London",
    Age: "27",StartDate: "2011/05/07",Salary: "$145,000"
  },
  {
    Name: "Gavin Cortez",Position: "Team Leader",Office: "San Francisco",
    Age: "22",StartDate: "2008/10/26",Salary: "$235,500"
  },
  {
    Name: "Martena Mccray",Position: "Post-Sales support",Office: "Edinburgh",
    Age: "46",StartDate: "2011/03/09",Salary: "$324,050"
  },
  {
    Name: "Unity Butler",Position: "Marketing Designer",Office: "San Francisco",
    Age: "47",StartDate: "2009/12/09",Salary: "$85,675"
  },
  {
    Name: "Howard Hatfield",Position: "Office Manager",Office: "San Francisco",
    Age: "51",StartDate: "2008/12/16",Salary: "$164,500"
  },
  {
    Name: "Hope Fuentes",Position: "Secretary",Office: "San Francisco",
    Age: "41",StartDate: "2010/02/12",Salary: "$109,850"
  },
  {
    Name: "Vivian Harrell",Position: "Financial Controller",Office: "San Francisco",
    Age: "62",StartDate: "2009/02/14",Salary: "$452,500"
  },
  {
    Name: "Timothy Mooney",Position: "Office Manager",Office: "London",
    Age: "37",StartDate: "2008/12/11",Salary: "$136,200"
  },
  {
    Name: "Jackson Bradshaw",Position: "Director",Office: "New York",
    Age: "65",StartDate: "2008/09/26",Salary: "$645,750"
  },
  {
    Name: "Olivia Liang",Position: "Support Engineer",Office: "Singapore",
    Age: "64",StartDate: "2011/02/03",Salary: "$234,500"
  },
  {
    Name: "Bruno Nash",Position: "Software Engineer",Office: "London",
    Age: "38",StartDate: "2011/05/03",Salary: "$163,500"
  },
  {
    Name: "Sakura Yamamoto",Position: "Support Engineer",Office: "Tokyo",
    Age: "37",StartDate: "2009/08/19",Salary: "$139,575"
  },
  {
    Name: "Thor Walton",Position: "Developer",Office: "New York",
    Age: "61",StartDate: "2013/08/11",Salary: "$98,540"
  },
  {
    Name: "Finn Camacho",Position: "Support Engineer",Office: "San Francisco",
    Age: "47",StartDate: "2009/07/07",Salary: "$87,500"
  },
  {
    Name: "Serge Baldwin",Position: "Data Coordinator",Office: "Singapore",
    Age: "64",StartDate: "2012/04/09",Salary: "$138,575"
  },
  {
    Name: "Zenaida Frank",Position: "Software Engineer",Office: "New York",
    Age: "63",StartDate: "2010/01/04",Salary: "$125,250"
  },
  {
    Name: "Zorita Serrano",Position: "Software Engineer",Office: "San Francisco",
    Age: "56",StartDate: "2012/06/01",Salary: "$115,000"
  },
  {
    Name: "Jennifer Acosta",Position: "Junior Javascript Developer",Office: "Edinburgh",
    Age: "43",StartDate: "2013/02/01",Salary: "$75,650"
  },
  {
    Name: "Cara Stevens",Position: "Sales Assistant",Office: "New York",
    Age: "46",StartDate: "2011/12/06",Salary: "$145,600"
  },
  {
    Name: "Hermione Butler",Position: "Regional Director",Office: "London",
    Age: "47",StartDate: "2011/03/21",Salary: "$356,250"
  },
  {
    Name: "Lael Greer",Position: "Systems Administrator",Office: "London",
    Age: "21",StartDate: "2009/02/27",Salary: "$103,500"
  },
  {
    Name: "Jonas Alexander",Position: "Developer",Office: "San Francisco",
    Age: "30",StartDate: "2010/07/14",Salary: "$86,500"
  },
  {
    Name: "Shad Decker",Position: "Regional Director",Office: "Edinburgh",
    Age: "51",StartDate: "2008/11/13",Salary: "$183,000"
  },
  {
    Name: "Michael Bruce",Position: "Javascript Developer",Office: "Singapore",
    Age: "29",StartDate: "2011/06/27",Salary: "$183,000"
  },
  {
    Name: "Donna Snider",Position: "Customer Support",Office: "New York",
    Age: "27",StartDate: "2011/01/25",Salary: "$112,000"
  }
]

const SecondCompnent = () => {
    return (
        <div id="layoutSidenav_content">
            <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Tables</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Tables</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                DataTable Example
                            </div>
                            <ContainerTable products={PRODUCTS} />
                          </div>
                      </div>
              </main>
              <Footer/>
        </div>                    
    )
}

export default SecondCompnent;