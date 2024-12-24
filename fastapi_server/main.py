from fastapi import FastAPI, HTTPException
from typing import Optional
from pydantic import BaseModel


app = FastAPI()


@app.get("/fastpai/getdata")
async def getdata():
    return {"hey": "buddy"}


# @app.get("/fastapi/postdata/{name}")
# async def postdata(name:str):
#     return {"name": name}

from utils.summaryextractor import summaryextractor
    


# @app.get("/fastapi/postdata")
# async def postdata(name:Optional[str] = "Name",age:Optional[int]=0):
#     return {"name": name,"age": age}


@app.get("/fastapi/postdata")
async def postdata():
    return {"this ":"is a test"}


class Sitemodel(BaseModel):
    sitename: str


@app.post("/fastapi/getsummary")
async def get_summary(url_data: Sitemodel):
    try:
        site_name = url_data.sitename
        summary = summaryextractor(site_name)
        return summary
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))  # Bad Request
    except RuntimeError as e:
        raise HTTPException(status_code=500, detail=str(e))  # Internal Server Error
    except Exception as e:
        raise HTTPException(status_code=500, detail="An unexpected error occurred.")  # Catch-all