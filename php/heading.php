<?php 
    $user = file_get_contents("interview-master/data/user.json");
      $data = json_decode($user, true);
      $info = $data["name"];
      echo "<div class='user'>"."<p>Logged in as:</p>";
      echo "<h4>".$data["name"]."</h4>"."</div>";
    ?>