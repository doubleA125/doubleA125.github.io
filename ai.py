import requests
from bs4 import BeautifulSoup
import os

# URL of the website to scrape
url = "https://www.almadrasa.com"

# Send a GET request to the website
response = requests.get(url)
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.content, "html.parser")

    # Extract all H2 headers
    h2_headers = [h2.get_text() for h2 in soup.find_all('h2')]
    print("H2 Headers:")
    for header in h2_headers:
        print(header)

    # Extract all image URLs
    img_urls = [img['src'] for img in soup.find_all('img') if 'src' in img.attrs]
    
    # Download images
    img_folder = 'images'
    if not os.path.exists(img_folder):
        os.makedirs(img_folder)

    for idx, img_url in enumerate(img_urls):
        if not img_url.startswith('http'):
            img_url = url + img_url
        img_data = requests.get(img_url).content
        img_name = os.path.join(img_folder, f"image_{idx+1}.jpg")
        with open(img_name, 'wb') as handler:
            handler.write(img_data)
        print(f"Downloaded {img_name}")

else:
    print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
