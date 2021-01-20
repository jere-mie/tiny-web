function generate(){
    // input fields
    let company = document.querySelector("#company");
    let job = document.querySelector("#job");
    let name = document.querySelector("#name");

    console.log(company.value);
    console.log(job.value);
    console.log(name.value);
    // fields that need to be filled in
    let content_date = document.querySelector("#content-date");
    let content_name = document.querySelector("#content-name");
    let content_company = document.querySelector("#content-company");
    let content_job = document.querySelector("#content-job");
    let salutation = document.querySelector("#salutation");
    let bold_job = document.querySelector("#bold-job");
    let company_name = document.querySelector("#company-name");

    let d = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    content_date.innerText = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

    if(!name.value){
        salutation.innerText = "To whom it may concern,";
    }else{
        salutation.innerText = "Dear "+name.value+",";
        content_name.innerText = name.value;
    }
    content_job.innerText = "Re: "+job.value;
    content_company.innerText = company.value;
    bold_job.innerText = job.value;
    company_name.innerText = company.value;

    document.title = "Cover Letter "+company.value+" "+job.value;
    print();
}