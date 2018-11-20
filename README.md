# potato-script
Potato script is here :D

### Define a var
init var_name : ( value ) [ tag ] |
* TAG = global, local, private, constant

### Define a function
func function_name : ( state ) [ tag ] |
* STATE = async, sync, event
* TAG = static, private

### Contruct a var
construct construct_name : ( type ) [ tag ] |
* TYPE = list, map

### Read a construct
index construct_name : ( index ) [ return ] |

### Edit a construct
serve construct_name : ( index ) [ value ] |

### Return a math function
math function_name : ( input ) [ return ] |
* FUNCTION_NAME = random, sqr, range, bounds, floor, ceil, round, min, max

### Edit a math object
edit var_name : ( input ) [ tag ] |
* TAG = +, -, *, /, **, 

### Get a complex constant
complex var_type : ( return ) [ tag ] |
* VAR_TYPE = pi

### End a group
end value : ( static ) [ static ] |

### Compare vars
detect var1 : ( var2 ) [ tag ] |
* TAG = =, !=, >, <, >=, <=

### Run a function
run function_name : ( static ) [ static ] |

### Import a file
insert file_name : (static) [tag] |

### Run a file
script file_name : (static) [static] |
