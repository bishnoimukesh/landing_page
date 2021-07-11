<script type="text/javascript">
    function validate()
    {
        if(   document.getElementById("username").value == "frontend"
           && document.getElementById("password").value == "developer" )
        {
            location.href="dashboard.html";
        }
        else
        {
            alert( "validation failed" );
            location.href="fail.html";
        }
    }
    </script>