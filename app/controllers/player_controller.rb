class PlayerController < ApplicationController
  def show
    urls = { '1': 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      '2': 'https://amazingaudioplayer.com/wp-content/uploads/amazingaudioplayer/9/audios/Inspiring%20Ideas%20into%20Motion.mp3',
      '3': 'https://amazingaudioplayer.com/wp-content/uploads/amazingaudioplayer/9/audios/Peaceful%20Dawn.mp3'
       }
       @url = urls[params[:id].to_sym]
   end
end
