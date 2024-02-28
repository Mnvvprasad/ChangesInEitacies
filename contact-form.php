<?php
session_start();

function update_Lead($data)
{

    $key = 'keyjl7ypBT1kLHcfz';
    $appid = 'appdgETqJH3dhQZEu';

    $fields = '{ "fields": { "Reason": "' . $data['reason'] . '", "First Name": "' . $data['fname'] . '", "Last Name": "' . $data['lname'] . '", "Email": "' . $data['email'] . '", "Phone Number": "' . $data['phone'] . '", "Company": "' . $data['company'] . '", "Location": "' . $data['location'] . '", "Message": "' . $data['message'] . '"} }';

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.airtable.com/v0/$appid/Contact%20Us%20Leads",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => $fields,
        CURLOPT_HTTPHEADER => array(
            "Authorization: Bearer $key",
            "Content-Type: application/json"
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);

}

if(isset($_POST["submit"]))

 {

    $reason = $_POST['reason'];
    $fname = $_POST['fname']; $lname = $_POST['lname']; $email = $_POST['email']; $phone = $_POST['phone']; $company = $_POST['company']; $location = $_POST['location']; $message = $_POST['message'];

    echo "Thank you for enquiring. We will get in touch with you soon.";

    $data_array = array("reason" => $reason, "fname" => $fname, "lname" => $lname, "email" => $email, "phone" => $phone, "company" => $company, "location" => $location, "message" => $message);

    if($fname != '' && $email != '' &&  $phone != ''){
        update_Lead($data_array);
    }


}
 
?>