
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Register</title>
</head>
<body>

<?php
if (!empty($_POST))
{
    if ($_POST['password'] == $_POST['password2'])
    {
        header('Location: /');
    }else{

        ?>
        <div class="container">
            <div class="row justify-content-start">

                <div class="col-3">
                </div>
                <div class="col-4">
                    <div class="alert alert-danger" role="alert" style="position: relative ; margin-top: 50px">
                        Invalid password
                    </div>
                </div>
            </div>
        </div>
        <?php
    }


}?>


<div class="container" style="margin-top: 10%">



<div class="row justify-content-start">

    <div class="col-3">
    </div>
    <div class="col-sm-6">
        <div class="panel-heading">
            <strong style="text-align: center"> Create your account :</strong>
            <br>
        </div>
        <div class="panel-body">
            <form role="form" action="#" method="POST" style="margin-top: 15px">
                <fieldset>

                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-12 " >
                            <div class="form-group">
                                <div class="input-group">
                                    <label>User name</label>
                                    <input class="form-control"  name="login" type="text" style="margin-bottom: 8px; margin-left: 10px" autofocus required>
                                </div>
                                <div class="input-group">
                                    <label>email</label>
                                    <input class="form-control"  name="email" type="email" style="margin-bottom: 8px; margin-left: 10px" autofocus required>
                                </div>
                                <div class="input-group">
                                    <label>Choose a password</label>
                                    <input class="form-control"  name="password" type="password" style="margin-bottom: 8px; margin-left: 10px" autofocus required>
                                </div>
                                <div class="input-group">
                                    <label>Repeat your password</label>
                                    <input class="form-control"  name="password2" type="password" style="margin-bottom: 8px; margin-left: 10px" autofocus required>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-lg btn-primary btn-block" value="Sign in">
                            </div>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <div class="panel-footer ">
            <a href="session.php" onClick="">Back</a>
        </div>
    </div>
</div>


</div>
















<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>