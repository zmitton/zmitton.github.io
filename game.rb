class Battle_game

   attr_reader :num_misses_so_far , :game_in_progress , :guessing_board # readable properties
   attr_accessor :title # this is the only instance property that can be read and written to
   
   # The following variables belong to the class. Here they control game settings
   @@allowed_guesses = 10 
   @@board_length = 4
   
    def initialize(game_title = "player1's game")
     @title = game_title
     @computer_board = setup_ship_board
     @guessing_board = setup_guessing_board
     @game_in_progress = true
     @num_misses_so_far = 0
   end
   
   def take_turn (j,i)
     i = (@@board_length ) - i.to_i
     j = j.downcase.ord-97
     @guessing_board[i][j] = "X"
     print_guessing_board
     if @computer_board[i][j] == "1"
       @computer_board[i][j] = "X"
       game_over("win") if everything_sunk
       "Hit!!!"
     else
       @guessing_board[i][j] == "1"
       @num_misses_so_far += 1
       game_over("lose") if @num_misses_so_far > 10
       "Miss"
     end
   end
   
   def print_guessing_board
     print_board(@guessing_board)
   end
   
   
   private # all methods defined below this will be private
   
   def print_board(the_board)
     the_board.each_with_index{|x, i|
       print "#{@@board_length - i} "
       x.each{|y| print y }
       print "\n"
     }
     print " "
     @@board_length.times{|x| print (x+97).chr.upcase}
     puts "\n"
   end
   
   def everything_sunk
     game_is_over = true
     @computer_board.each{|x|
       x.each{|y| game_is_over = false if y == "1" }
     }
     game_is_over
   end
   
   def game_over (outcome)
     puts "You #{outcome}.\n\n"
     @game_in_progress = false
     print_board(@computer_board)
   end
   
   def setup_ship_board
     the_board = []
     @@board_length.times{
       row = []
       @@board_length.times{ row << ["0","0","1"].sample}
       the_board << row     }
     the_board
   end
   
   def setup_guessing_board()
     the_board = []
     @@board_length.times{
       row = []
       @@board_length.times{ row << 0}
       the_board << row
     }
     the_board
   end
end

game1 = Battle_game.new()
puts "\ngame name is #{game1.title}"
game1.title = "Zac's game"
puts "game name is now #{game1.title}\n\n"

# game1.print_board(game1.guessing_board) # This will not work because the method is private
game1.print_guessing_board # This works because the method is public (even though this method calls the private one from within itself).


while game1.game_in_progress
   puts "\n#{game1.num_misses_so_far} misses so far\n" # This property can be read publicly because of line 3.
   puts "Enter X coordinate"
   x = gets.chomp
   puts "Enter Y coordinate"
   y = gets.chomp
   puts game1.take_turn(x,y)
end 
