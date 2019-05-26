<section id="embarquez">
  <h4 class="jah_font">
    <i class="fas fa-caret-right red"></i>
    Embarquez-vous dans la citoyenneté
  </h4>
  <section id="sec_embarquez">
    <a href="Participer#Organiser">
      <div>
        <p class="pre hover-off">ORGANISEZ EDUCAP CITY
  DANS MA VILLE OU MON ECOLE</p>
        <img src="resources/images/Photos/embarquez_organisez.jpg" alt="embarquez_organisez" class="hover-off">
      </div>

    </a>
    <a href="Participer#Partenaire">
      <div>
        <p class="hover-off">DEVENIR PARTENAIRE</p>
        <img src="resources/images/Photos/embarquez_partenaire.png" alt="embarquez_partenaire" class="hover-off">
      </div>

    </a>
    <a href="#">
      <div>
        <p class="hover-off">FAIRE UN DON</p>
        <img src="resources/images/Photos/embarquez_don.png" alt="embarquez_don" class="hover-off">
      </div>
    </a>
    <a href="#">
      <div>
        <p class="hover-off">DEVENIR BENEVOLE</p>
        <img src="resources/images/Photos/embarquez_benevoles.png" alt="embarquez_benevoles" class="hover-off">
      </div>
    </a>
  </section>
  <div class="div_form">
    <section class="form">
      <h4 class="jah_font">
        <i class="fas fa-caret-right green"></i>
        Contactez-nous
      </h4>
      <form>
        <ul class="grid">
          <li class="item-a grid-li">
            <label>Nom</label>
            <input type="text" name="contact_nom" required>
          </li>
          <li class="item-b grid-li">
            <label>Email</label>
            <input type="text" name="contact_email" required>
          </li>
          <li class="item-c grid-li">
            <label>Sujet</label>
            <input type="text" name="contact_sujet" required>
          </li>
          <li class="item-d grid-ta" required>
            <label>Message</label>
            <textarea name="contact_message" rows="8" cols="80" required></textarea>
          </li>
          <li class="item-e grid-li">
            <label for="upload-file" class="custom-upload">
              <i class="fas fa-upload"></i>
              Fichiers
            </label>
            <span class="show_formats">Formats acceptés : pdf, doc, docx, odt, jpg, png</span>
            <p></p>
            <input id="upload-file" type="file" name="files[]" multiple="multiple">
          </li>
          <li class="item-f">
            <button id="form_button" class="round-border padding" type="button" name="contact_button">Envoyer</button>
          </li>
        </ul>
      </form>
    </section>
    <p class="sent"></p>
  </div>
</section>
