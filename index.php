<html>
  <head>
    <title>PHP Test</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
    <script src="map.js"></script>
    <?php 
      $SECRET = getenv('SECRET');
      echo ++$SECRET;
      echo "<script async src="."'https://maps.googleapis.com/maps/api/js?key=".$SECRET."&callback=initMap'></script>";
    ?>
    </head>
    <body>
    <div class="main">
    <div class="heading">
    <h1>Events & Articles</h1>
    <?php include("php/heading.php"); ?>
    </div>
    <div class="articles-container">

    <h2>Articles</h2>
    <?php include("php/articles.php"); ?>
      <div>
      <h2>Events Map</h2>
      <div id="map"></div>
      </div>
    </div>

    <div class='events-container'>
      <h2>Upcoming Events</h2>
     <?php include("php/sidebar.php"); ?> 
    </div>
   </div>  
  </body>
</html>