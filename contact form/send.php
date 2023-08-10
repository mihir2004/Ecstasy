<?php
    if(isset($_POST['submit'])){
      $name=$_POST['name'];
      $email=$_POST['email'];
      $phone=$_POST['phone'];
      $msg=$_POST['message'];
      header('location:../index.htm');

      $to='kasaremihir2004@hotmail.com, kasaremihir2004@gmail.com';
      $subject='Form Submission';
      $message = "Name : ".$name."\n"."Phone : ".$phone."\n". "Wrote the following : "."\n\n".$msg;
      $headers="From: ".$email;


      if(mail($to, $subject, $message, $headers)){
        echo "<h1>Sent Successfully! Thank You :)"."".$name.", We will contact you shortly!</h1>";
      }
      else{
        echo "Something went wrong:(. Try again later!";
      }
    }


 ?>
