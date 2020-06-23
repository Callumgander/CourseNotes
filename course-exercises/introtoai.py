# Tree search function
# pseudocode


def TreeSearch(problem):
    frontier = {[initial]}
    loop:
        # if there's nothing in the frontier and you haven't found the goal, you can't do it
        if frontier is empty:
            return FAIL
        # pick a path and remove it from frontier
        path = remove_choice(frontier)
        s = path.end
        # if you reach the end of the path and it's a goal, you've done it
        if s is a goal:
            return path
        # add an action to the path and add the result to frontier, so you expand the frontier
        for a in actions:
            add[path + a -> result(s, a)]
            to frontier
