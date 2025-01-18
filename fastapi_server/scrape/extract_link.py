# import re
# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.chrome.service import Service
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options
# # from selenium.webdriver.firefox.options import Options
# from webdriver_manager.firefox import GeckoDriverManager

# def get_first_google_result(url):
#     match = re.search(r'https://(.*)\.', url)
#     if match:
#         context = match.group(1)
#     else:
#         context = ''

#     # Form search query
#     query = f"{context} terms and conditions"

#     options = Options()


#     # Configure Chrome options
#     # options.add_argument("--headless")  
#     # options.add_argument("--disable-gpu") 
#     # options.add_argument("--window-size=1920,1080") 

#     # Initialize WebDriver
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
#     # driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()), options=options)

    
#     try:
#         driver.get("https://duckduckgo.com")

#         # Wait for the page to load
#         driver.implicitly_wait(0.3)

#         # Find the search box, enter the query, and submit
#         search_box = driver.find_element(By.NAME, "q")
#         search_box.send_keys(query)
#         search_box.send_keys(Keys.RETURN)

#         # Wait for results to load
#         wait = WebDriverWait(driver, 2)
#         first_element_locator = (By.CSS_SELECTOR, 'div.ikg2IXiCD14iVX7AdZo1 h2.LnpumSThxEWMIsDdAT17.CXMyPcQ6nDv47DKFeywM a')
#         wait.until(EC.visibility_of_element_located(first_element_locator))
#         result_element = driver.find_element(*first_element_locator).get_attribute('href')
#         return result_element
#     finally:
#         driver.quit()

# # print(get_first_google_result('https://x.com/home'))


import re
import requests
from bs4 import BeautifulSoup

from urllib.parse import urlparse

def convert_to_full_url(url):
    if url.startswith('//'):
        # Prepend 'https:' to the URL if it starts with '//' (protocol-relative URL)
        url = 'https:' + url
    return url

def get_first_google_result(url):
    # Extract domain from URL
    match = re.search(r'https://(.*)\.', url)
    if match:
        context = match.group(1)
    else:
        context = ''

    # Form search query
    query = f"{context} terms and conditions"
    search_url = f"https://duckduckgo.com/html/?q={query.replace(' ', '+')}"

    # Send a GET request to DuckDuckGo's search results page
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    response = requests.get(search_url, headers=headers)

    if response.status_code == 200:
        # Parse the HTML content
        soup = BeautifulSoup(response.text, "html.parser")

        # Find the first search result link
        first_result = soup.find("a", {"class": "result__a"})
        if first_result:

            return convert_to_full_url(first_result["href"])
        else:
            return "No result found"
    else:
        return f"Failed to fetch results. Status code: {response.status_code}"

# print(get_first_google_result('https://x.com/home'))
