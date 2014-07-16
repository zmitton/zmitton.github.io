def beckett_directions(actors)
  stage_directions = []
  last_toggled_index = -1
  grey_array = [false,false,false,false,false,false] #actors.map{0}
  stage_directions = (1..(2**actors.length)).map{
  	if last_toggled_index == 0
  		grey_array.each_with_index{|bit, i|
  			if bit == true 
  				puts "2"
  				grey_array[i+1] = !grey_array[i+1]
  				last_toggled_index = i+1
  				break
  			end
  		}
  	else
  		grey_array[0] = !grey_array[0] 
  		last_toggled_index = 0
  	end
	scene = actors.each_with_index.map{|actor, i|  [actor, i+2]
		staged_person = grey_array[i] ? actor : nil
	}
	scene.compact
  }
  stage_directions
end

beckett_directions(['apple', 'pear', 'melon', 'orange', 'banana', 'tomato']).each{|x| p x }
