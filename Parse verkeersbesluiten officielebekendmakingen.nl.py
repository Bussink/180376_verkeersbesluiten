#!/usr/bin/env python
# coding: utf-8

# In[8]:


# Dit script gebruikt de api van koopoverheid.nl om alle verkeersbesluiten 2018 van de gemeente Amsterdam met coordinaten op te slaan in een  csv bestand

# in url kun je aanpassen
# type besluit = verkeersbesluit
# creator = overheidsinstantie die heeft gepubliceerd
# jaar = publicatie jaar
# script levert alleen de eerste 4020 records. Bij meer records is script niet volledig

#https://www.koopoverheid.nl/binaries/koop/documenten/instructies/2018/03/24/handleiding-open-data-webservice-van-overheid.nl---sru/Handleiding+voor+het+bevragen+van+de+zoekdienst+via+SRU.pdf

# met dank aan Timoteüs

import requests
import numpy as np
import xml.etree.ElementTree as ET
url = 'https://zoekdienst.overheid.nl/sru/Search?x-connection=oep&operation=searchRetrieve&version=1.2&startRecord=1&maximumRecords=5000&query=(type=Verkeersbesluiten)and(creator=Amsterdam)and(jaargang=2018)'
XML = requests.get(url)

rootbase = ET.XML(XML.content)
root = ET.XML(XML.content)

tree = root.iter()
for e in tree:
    if '{http://' in e.tag:
        e.tag = e.tag.split('}',1)[1]

tree = root.iter('record')
treeList = list(tree)

ar = []

count = 0
for e in treeList:
    count += 1
    id = None
    space = []
    bord = []
    var = e.iter('identifier')
    for f in var:
        id = f.text
        var = e.iter('spatial')
        for ff in var:
                #space.append(ff.text)
                var = e.iter('verkeersbordcode')
                for f in var:
                    #bord.append(f.text)
                    link=('https://zoek.officielebekendmakingen.nl/'+id)
                    x=(count,";",id,";",ff.text,";",f.text,";",link)
                    #print(x)
                    ar.append('\''+str(x)+'\'')

np.savetxt('Script_verkeersbesluiten_amsterdam_2018.csv', ar, delimiter=';', fmt='%s')

