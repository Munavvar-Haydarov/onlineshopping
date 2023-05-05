import re
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec

import json
driver = webdriver.Chrome()
men_clothes = [
    # 'elbise-x-c56',
    # https://shop.mango.com/tr/erkek/gomlek_c10863844
    # 'kadin-t-shirt-x-g1-c73',
    # 'kadin-gomlek-x-g1-c75',

    # 'kadin-jean-x-g1-c120',
    # 'kot-ceket-y-s12676',
    # 'kadin-pantolon-x-g1-c70',
    # 'kadin-mont-x-g1-c118',
    # 'kadin-bluz-x-g1-c1019',
    # 'kadin-ceket-x-g1-c1030',
    # 'etek-x-c69',
    # 'kadin-kazak-x-g1-c1092',
    # 'kadin-tesettur-giyim-x-g1-c81',
    # 'kadin-buyuk-beden-x-g1-c80'

]
men_shoes = [
    # 'kadin-topuklu-ayakkabi-x-g1-c107',
    # 'kadin-sneaker-x-g1-c1172',

    # 'kadin-gunluk-ayakkabi-x-g1-c1352',
    # 'kadin-babet-x-g1-c113',
    # 'kadin-sandalet-x-g1-c111',
    # 'kadin-sandalet-x-g1-c111',
    # 'kadin-bot-x-g1-c1025',
]
men_accessories_bags = [
    # 'kadin-canta-x-g1-c117',
    # 'kadin-saat-x-g1-c34',
    'kadin-taki-mucevher-x-g1-c28',
    'kadin-sapka-x-g1-c1181',
    'kadin-cuzdan-x-g1-c1032',


]
men_underwear = [
    'kadin-pijama-takimi-x-g1-c101496',
    'kadin-gecelik-x-g1-c62',
    'kadin-sutyen-x-g1-c63',
    'kadin-ic-camasiri-takimlari-x-g1-c104536',
    'kadin-fantezi-giyim-x-g1-c109067',
    'kadin-corap-x-g1-c1038',
]
men_luxury_designer = [
    'sr?fl=tasarim-ve-luks-markalar&wc=117&bu=100161,100148',
    'sr?fl=tasarim-ve-luks-markalar&wc=82&bu=100161,100148',
    'sr?fl=tasarim-ve-luks-markalar&wc=114&bu=100161,100148',
    'sr?fl=tasarim-ve-luks-markalar&wc=82&bu=100160',
    'sr?fl=tasarim-ve-luks-markalar&wc=114&bu=100160',

]
men_cosmetic = [
    'parfum-x-c86',
    'goz-makyaji-x-c1347',
    'cilt-bakimi-x-c85',
    'sac-bakimi-x-c87',
    'makyaj-x-c100',
    'agiz-bakim-x-c101396',
    'cinsel-saglik-x-c101408',
    'vucut-bakimi-x-c1204',
    'hijyenik-ped-x-c101409',
    'dus-jeli-ve-kremleri-x-c101401',
    'epilasyon-urunleri-x-c104060',
    'ruj-x-c1156',
    'yuz-gunes-kremi-x-c1061',
]
men_sports_outdoor = [

    'kadin-spor-sweatshirt-x-g1-c101456',
    'kadin-spor-t-shirt-x-g1-c101459',
    'kadin-sporcu-sutyeni-x-g1-c1358',
    'kadin-spor-tayt-x-g1-c101460',
    'kadin-esofman-x-g1-c1049',
    'kadin-spor-ayakkabi-x-g1-c109',
    'spor-cantasi-x-c1174',
    'spor-aletleri-x-c104192',
    'kadin-outdoor-ayakkabi-x-g1-c1128',
    'kadin-kar-botu-x-g1-c142587',
    'outdoor-ekipmanlari-x-c104230',
    'sporcu-besini-supplementler-x-c105131',
    'kadin-sporcu-aksesuarlari-x-g1-c104521',
]
men = [
    men_clothes,
    men_shoes,
    men_accessories_bags,
    men_underwear,
    men_luxury_designer,
    men_sports_outdoor
]

# man = [men, women]
try:
    # for x in men:
    #     # print('xxxxx', x)
    #     for y in x:
    #         print('yyyyy', y)
    products = []
    linkUrl = 'https://shop.mango.com/tr/erkek/bermuda_c11687531'
    print(linkUrl)
    driver.get(linkUrl)
    while True:
        driver.execute_script(
            "window.scrollBy(0, 1000);")
        time.sleep(1)
        new_height = driver.execute_script(
            "return document.body.scrollHeight")
        print('newheight', new_height)
        body_height = driver.execute_script(
            "return (window.innerHeight + window.scrollY) >= document.body.offsetHeight")
        print('ToBottom?', body_height)
        if (body_height == True):
            break
    allProductCardElements = driver.find_elements(
        By.CLASS_NAME, 'ZXN_y')
    print(len(allProductCardElements))
    for productCardTemp in allProductCardElements:
        imgUrl = ''
        price = ''
        title = ''
        # try:
        #     WebDriverWait(driver, 10).until(
        #         EC.presence_of_element_located((By.CLASS_NAME, 'Slideshow_slideshow__0ba54112')))
        #     imgUrl = productCardTemp.find_element(
        #         By.CLASS_NAME, 'ZXN_y').find_elements(By.TAG_NAME, 'img')
        #     imgUrl = imgUrl[len(imgUrl)-1].get_attribute('original')
        #     print(imgUrl)
        # except Exception as error:
        #     print('error:', error)
        try:
            price = productCardTemp.find_element(
                By.CLASS_NAME, 'sr-only').text
            # price = price[0].text
            # string = ''
            # for x in price:
            #     string = string + x.text
            print(price)
        except Exception as error:
            print("error:", error)
        # try:
        #     title = productCardTemp.find_elements(
        #         By.CLASS_NAME, 'tgXMK')
        #     title = title[len(title)-1].text
        #     print(title)
        # except Exception as error:
        #     print('error', error)
        products.append({
            'imgUrl': imgUrl,
            'price': price,
            'title': title,
        })
    json_numbers = json.dumps(products)
    # y = re.sub('[%/?\\-1234567890]', '', y)
    jsonUrl = 'trendyol-women-1' + '.json'
    print(jsonUrl)
    with open(jsonUrl, "w") as outfile:
        outfile.write(json_numbers)
except Exception as error:
    print("there was an error: %s" % error)
finally:
    driver.quit()
