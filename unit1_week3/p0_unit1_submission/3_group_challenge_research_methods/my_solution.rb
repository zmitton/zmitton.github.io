=begin
both of these functions return arrays
=end

def my_array_finding_method(source, thing_to_find)
    source.select { |word| word =~ /#{thing_to_find}/ ? word : nil } 
end

def my_hash_finding_method(source, thing_to_find)
	array = []
    source.each { |name, age| age == thing_to_find ? array.push(name) : nil} 
    array
end

