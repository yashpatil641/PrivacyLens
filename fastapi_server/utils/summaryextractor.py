


def summaryextractor(site_name: str) -> str:
    if site_name == "":
        raise ValueError("Site name cannot be empty.")
    if site_name == "error-site":
        raise RuntimeError("An unexpected error occurred.")
    # return f"The first rule of using {site_name} is you never talk about {site_name}."
    
    return ([
    {
      "site": "Reddit",
      "score_type": "Privacy Score",
      "score": 70,
      "summary":
        f"The first rule of using {site_name} is you never talk about {site_name}.",
    }
  ])