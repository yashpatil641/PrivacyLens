import express, { response } from "express";
import axios from "axios";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
const port = 6969;
app.use(express.json()); 












app.post("/api/get_privacydata/", async (req, res) => {
  const fastapi_base_url = "http://127.0.0.1:8000/fastapi";
  const data = await prisma.site.findUnique({
    where: {
      url: req.body.url,
    },

    select: {
      url: true,
      scores: {
        select: {
          data: true,
        }
      },
      metadata: {
        select: {
          risk_percentage: true,
          risk_level: true,
          GDPR_compliance_score: true,
          additional_notes: true,
        }
      }
    }
  })
  try {
    if (data) {
      res.json(data);
    }
    else {
      const rponse = await axios.post(`${fastapi_base_url}/getprivacy_data`, {
        url: req.body.url,
      });
      const site = await prisma.site.create({
        data: {
          url: req.body.url,
        }
      })
      for (let i = 0; i < rponse.data.scores.length; i++) {
        const element = rponse.data.scores[i];
        await prisma.score.create({
          data: {
            data: element.data,
            siteId: site.id
          }
        })
      }
      const k = await prisma.riskMetadata.create({
        data: {
          risk_percentage: rponse.data.metadata.risk_percentage,
          risk_level: rponse.data.metadata.risk_level,
          GDPR_compliance_score: rponse.data.metadata.GDPR_compliance_score,
          additional_notes: rponse.data.metadata.additional_notes,
          siteId: site.id
        }
      })
      // const createscores = await prisma.score.create({
      //   data:{
      //     data : rponse.data.scores
      //   }
      // })
      const data = await prisma.site.findUnique({
        where: {
          url: req.body.url,
        },

        select: {
          url: true,
          scores: {
            select: {
              data: true,
            }
          },
          metadata: {
            select: {
              risk_percentage: true,
              risk_level: true,
              GDPR_compliance_score: true,
              additional_notes: true,
            }
          }
        }
      })
      console.log(rponse.data);
      console.log(k)
      res.json(data);
    }



  } catch (error) {
    console.error("Error communicating with FastAPI:", error.message);
    res.status(500).send({ error: "Failed to fetch summary from FastAPI" });
  }
});

app.listen(port, () => {
  console.log(`listning on port ${port}`);
});
