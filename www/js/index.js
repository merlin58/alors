document.addEventListener('deviceready', function() {
        
        var bipbipSound = new Media(cordova.file.applicationDirectory + 'www/audio/alors.wav', mediaSuccess, mediaError, mediaStatus);
        
        function mediaSuccess()
        {
            
        }
        
        function mediaError(error)
        {
            alert(error);
        }
        
        function mediaStatus()
        {
            
        }
        
       document.querySelector('button').addEventListener('click', function() { bipbipSound.play(); });
        
    });