 <?php
        $json = file_get_contents("interview-master/data/events.json");
        $json = json_decode($json, true);
        foreach ($json as $row) 
        {
          echo "<div class='tile'>";
          echo "<a href=".$row["url"]."><h3>".$row["title"]."</h3></a>";
          echo "<p>".$row["location"]."</p>";
          echo "<p>".$row["date"]." | ".$row["time"]."</p>";
          echo "</div>";
        }
  ?> 