<?php
    class locationModel{
        public function setlocation($location){
            SetCookie("location", $location, time() + 80000, "/");
        }
    }
?>