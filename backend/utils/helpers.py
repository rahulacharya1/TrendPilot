from datetime import datetime


def current_time():

    return datetime.now()


def format_response(
    success,
    message,
    data=None
):

    return {
        "success": success,
        "message": message,
        "data": data
    }
    
