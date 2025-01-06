data = {
  "scores": [
    {
      "data": {
        "type": "Account Control",
        "score": 4,
        "quotes": [
          "You can control your account settings and privacy preferences"
        ]
      }
    },
    {
      "data": {
        "type": "Data Collection",
        "score": 3,
        "quotes": [
          "We collect information about your device and your use of Reddit",
          "We collect information from third-party websites and apps that use our services"
        ]
      }
    },
    {
      "data": {
        "type": "Data Deletion",
        "score": 3,
        "quotes": [
          "You can delete your account and data at any time",
          "We may retain certain information after you delete your account"
        ]
      }
    },
    {
      "data": {
        "type": "Data Sharing",
        "score": 3,
        "quotes": [
          "We may share information with third-party service providers",
          "We may share information with other Reddit users and communities"
        ]
      }
    },
    {
      "data": {
        "type": "Legal Rights",
        "score": 3,
        "quotes": [
          "You have certain legal rights with respect to your information",
          "We may limit or deny your request if it violates applicable law"
        ]
      }
    },
    {
      "data": {
        "type": "Privacy Controls",
        "score": 4,
        "quotes": [
          "You can control your privacy preferences and settings",
          "You can adjust your ad preferences and opt out of targeted advertising"
        ]
      }
    },
    {
      "data": {
        "type": "Security Measures",
        "score": 5,
        "quotes": [
          "We maintain appropriate physical, technical, and administrative safeguards",
          "We use industry-standard encryption to protect your data"
        ]
      }
    },
    {
      "data": {
        "type": "Terms Changes",
        "score": 3,
        "quotes": [
          "We may modify these terms at any time",
          "We will notify you of any material changes to these terms"
        ]
      }
    },
    {
      "data": {
        "type": "Transparency",
        "score": 5,
        "quotes": [
          "We are transparent about how we collect, use, and share your information",
          "We provide you with notice of our data practices"
        ]
      }
    },
    {
      "data": {
        "type": "User Content Rights",
        "score": 3,
        "quotes": [
          "You retain your rights to any content you post or submit",
          "We may use your content for any purpose"
        ]
      }
    }
  ],
  "metadata": {
    "risk_percentage": 42,
    "risk_level": "Elevated Concern",
    "GDPR_compliance_score": 3,
    "additional_notes": "The document provides a moderate level of detail regarding data processing activities, but lacks clarity in some areas such as data deletion and user content rights. The document also mentions the use of data for various purposes, including targeted advertising, without explicit consent."
  }
}



def summaryextractor(site_name: str) -> str:
    if site_name == "":
        raise ValueError("Site name cannot be empty.")
    if site_name == "error-site":
        raise RuntimeError("An unexpected error occurred.")

    return (
        data
    )
