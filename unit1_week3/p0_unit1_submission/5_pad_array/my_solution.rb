# U1.W3: Pad an Array!

# I worked on this challenge [by myself, with: ].

# with Daniel Yoachim

# 1. Pseudocode

# What is the input?

# An array, a number(minimum value) and optionally a fill value

# What is the output? (i.e. What should the code return?)

# An array

# What are the steps needed to solve the problem?

#define pad method with required minLength argument and optional fillValue default nil
#    tempArray =  array
#    SET fillSpots = minlength - temparray length
#        loop fillSpot times
#            push fillValue to tamparray
#        end
#    if( "!" ) is specified
#        then SET origonal array to tempArray
#    end
#    return tempArray
#end




# 2. Initial Solution

#class Array
#    def pad!(minlength, fillValue = nil)
#        until self.length >= minlength do
#            self << fillValue
#        end
#        return self
#    end
#    
#    def pad(minlength, fillValue = nil)
#        cloneArray = self.clone
#        until cloneArray.length >= minlength do
#            cloneArray << fillValue
#        end
#        return cloneArray
#    end
#end


# 3. Refactored Solution
class Array
    def pad!(minlength, fillValue = nil)
        self << fillValue until self.length >= minlength
        return self
    end
    
    def pad(minlength, fillValue = nil)
        self.clone.pad!(minlength, fillValue)
    end
end

# 4. Reflection 

=begin
I had to learn to get rspec working for this. I also successfully created another repo on my account, cloned to my computer, tested different solutions locally until it worked, and then committed the changes to my repo in the cloud. This challenge was pretty good. It was alittle less arbitrary then the previouse ones of just defining variables, so I enjoyed thinking about it a little bit.

Mainly I think it helped become familliar with more github actions, and new angles for testing software.
=end
