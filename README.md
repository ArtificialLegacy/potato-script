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
* TAG = +, -, *, /, **, =

### Dynamicly edit a var
hyper var_name : ( var_name2 ) [ tag ] |

### Dynamicly edit a construct
super var_name : ( var_name2 ) [ var_name3 ] |

### Merge variables
merge var_name : ( var_name2 ) |

### Get a complex constant
complex var_type : ( return ) |
* VAR_TYPE = pi

### End a group
end value |

### Compare vars
detect var1 : ( var2 ) [ tag ] |
* TAG = =, !=, >, <, >=, <=

### Run a function
run function_name |

### Import a file
insert file_name : ( tag ) |

### Run a file
script file_name |

### Get a var from the main file
get var_name : ( tag ) |

### Return a var from a script
return var_name : ( tag ) |

### End a script
exit |

### remove a var
rem var_name |

### print to console
print var_name : ( tag ) |

### clear the console
clear |

### read a json file
parse file_name |

### save a json file
save file_name : ( style ) |

### send a var into a script scope
emit file_name : ( var_name ) |

### define a loop
loop |

### comments
~~ comment here
