<?php
      $data = file_get_contents("interview-master/data/articles.json");
      $data = json_decode($data, true);
      foreach ($data as $row)
      {
        echo "<div class='article'>";
        echo "<a href=".$row["url"] ."><div class='title'><h3>".$row["title"]."</h3></div></a>";
        echo "<img src=".$row["image"]." />";
        echo "<h6>Category: ".$row["category"]."</h6>";
        echo "<h6>Author: ".$row["author"]."</h6>";
        echo "</div>";
      }
?>