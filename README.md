# Social-Network-API
- The intent of the code in this API is to facilitate user creation, creation of posts in the form of "thoughts", and the ability to add friends and react to thoughts. Of course this is only the backend so the functionality is solely a test case.
- I began the project by setting up my folder structure and getting the server.js and the connection.js together.
- Once this was done I went into mongodb and created the necessary database to store my information.
- I then set about creating the models to the specifications on bootcampspot, and then set up the routes, which were fairly straightforward.
- What really took me a long time was getting the controllers together, as I had a lot of trouble figuring out how to get the friends and reactions to properly function, and how to even set them up. Eventually I did figure it out, but it was very challenging.
- A lot of what followed was me reaching out to the ASKBCS Support on Slack, who helped me to get my server to actually run. Until I got their help I was having trouble with the models not being set up properly, especially the ObjectId field on the reactions, which did not want to cooperate. Thankfully I got help guiding me to reformat my reaction model to use Schema.Types.ObjectId, which seemed to resolve the issue.
- After that, it was a matter of getting my routes to work by getting rid of an incorrectly typed route. My mistake was referencing the api/users and api/thoughts in the get route, even though they were already there.
- Things seemed to work okay from that point, though I did get stuck once again with the reactions, which required more help from ASKBCSSupport. Eventually we settled on just removing the call for an objectId from the reaction schema and that worked.
- A few small errors and I was all finished.

![walkthrough](https://drive.google.com/file/d/1jgrmMz4u11jWeIilt-f5455wZ_ji7uGL/view)